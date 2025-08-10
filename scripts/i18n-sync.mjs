#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

// Configuration
const MESSAGES_DIR = path.join(process.cwd(), 'messages')
const LOCALES = ['en', 'vi', 'ja', 'ko']
const BASE_LOCALE = 'en'

// Helper functions
function loadJsonFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(content)
  } catch (error) {
    console.error(chalk.red(`Error loading ${filePath}:`), error.message)
    return null
  }
}

function saveJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8')
    return true
  } catch (error) {
    console.error(chalk.red(`Error saving ${filePath}:`), error.message)
    return false
  }
}

function deepMerge(target, source, locale) {
  const result = { ...target }
  
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null) {
      result[key] = deepMerge(result[key] || {}, source[key], locale)
    } else if (!(key in result)) {
      // Add missing key with placeholder
      result[key] = `[${locale}] ${source[key]}`
      console.log(chalk.yellow(`  + Added: ${key}`))
    }
  }
  
  return result
}

function syncTranslations() {
  console.log(chalk.blue.bold('\n🔄 Syncing translation files...\n'))
  
  // Load base locale
  const basePath = path.join(MESSAGES_DIR, `${BASE_LOCALE}.json`)
  const baseMessages = loadJsonFile(basePath)
  
  if (!baseMessages) {
    console.error(chalk.red(`Failed to load base locale: ${BASE_LOCALE}`))
    process.exit(1)
  }
  
  console.log(chalk.green(`✓ Base locale (${BASE_LOCALE}) loaded\n`))
  
  // Sync each locale
  for (const locale of LOCALES) {
    if (locale === BASE_LOCALE) continue
    
    console.log(chalk.blue(`\nProcessing ${locale}...`))
    
    const localePath = path.join(MESSAGES_DIR, `${locale}.json`)
    const localeMessages = loadJsonFile(localePath)
    
    if (!localeMessages) {
      console.error(chalk.red(`✗ Failed to load locale: ${locale}`))
      continue
    }
    
    // Merge missing keys from base
    const syncedMessages = deepMerge(localeMessages, baseMessages, locale.toUpperCase())
    
    // Save synced file
    if (saveJsonFile(localePath, syncedMessages)) {
      console.log(chalk.green(`✓ ${locale}: Synced successfully`))
    } else {
      console.log(chalk.red(`✗ ${locale}: Failed to save`))
    }
  }
  
  console.log(chalk.green.bold('\n✅ Translation sync completed!\n'))
  console.log(chalk.yellow('Note: Look for [LOCALE] prefixes to find newly added keys that need translation.\n'))
}

// Add to package.json scripts
function updatePackageJson() {
  const packagePath = path.join(process.cwd(), 'package.json')
  
  try {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
    
    if (!packageJson.scripts['i18n:check']) {
      packageJson.scripts['i18n:check'] = 'node scripts/i18n-check.js'
      console.log(chalk.green('Added i18n:check script to package.json'))
    }
    
    if (!packageJson.scripts['i18n:sync']) {
      packageJson.scripts['i18n:sync'] = 'node scripts/i18n-sync.js'
      console.log(chalk.green('Added i18n:sync script to package.json'))
    }
    
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n')
  } catch (error) {
    console.log(chalk.yellow('Could not update package.json. Add scripts manually:'))
    console.log('  "i18n:check": "node scripts/i18n-check.js"')
    console.log('  "i18n:sync": "node scripts/i18n-sync.js"')
  }
}

// Run sync
syncTranslations()
updatePackageJson()