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

function extractKeys(obj, prefix = '') {
  let keys = []

  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      keys = keys.concat(extractKeys(obj[key], fullKey))
    } else {
      keys.push(fullKey)
    }
  }

  return keys
}

function compareTranslations() {
  console.log(chalk.blue.bold('\n🔍 Checking translation files...\n'))

  // Load base locale
  const basePath = path.join(MESSAGES_DIR, `${BASE_LOCALE}.json`)
  const baseMessages = loadJsonFile(basePath)

  if (!baseMessages) {
    console.error(chalk.red(`Failed to load base locale: ${BASE_LOCALE}`))
    process.exit(1)
  }

  const baseKeys = extractKeys(baseMessages).sort()

  console.log(chalk.green(`✓ Base locale (${BASE_LOCALE}): ${baseKeys.length} keys\n`))

  let hasErrors = false

  const stats = {
    missing: {},
    extra: {},
    empty: {}
  }

  // Check each locale
  for (const locale of LOCALES) {
    if (locale === BASE_LOCALE) continue

    const localePath = path.join(MESSAGES_DIR, `${locale}.json`)
    const localeMessages = loadJsonFile(localePath)

    if (!localeMessages) {
      console.error(chalk.red(`✗ Failed to load locale: ${locale}`))
      hasErrors = true
      continue
    }

    const localeKeys = extractKeys(localeMessages).sort()

    // Find missing keys
    const missingKeys = baseKeys.filter(key => !localeKeys.includes(key))

    if (missingKeys.length > 0) {
      stats.missing[locale] = missingKeys
      hasErrors = true
    }

    // Find extra keys
    const extraKeys = localeKeys.filter(key => !baseKeys.includes(key))

    if (extraKeys.length > 0) {
      stats.extra[locale] = extraKeys
      hasErrors = true
    }

    // Find empty values
    const emptyKeys = []

    localeKeys.forEach(key => {
      const value = key.split('.').reduce((obj, k) => obj?.[k], localeMessages)

      if (value === '' || value === null || value === undefined) {
        emptyKeys.push(key)
      }
    })

    if (emptyKeys.length > 0) {
      stats.empty[locale] = emptyKeys
      hasErrors = true
    }

    // Report for this locale
    if (missingKeys.length === 0 && extraKeys.length === 0 && emptyKeys.length === 0) {
      console.log(chalk.green(`✓ ${locale}: Perfect! (${localeKeys.length} keys)`))
    } else {
      console.log(chalk.yellow(`⚠ ${locale}: Issues found`))

      if (missingKeys.length > 0) {
        console.log(chalk.red(`  - Missing: ${missingKeys.length} keys`))
      }

      if (extraKeys.length > 0) {
        console.log(chalk.yellow(`  - Extra: ${extraKeys.length} keys`))
      }

      if (emptyKeys.length > 0) {
        console.log(chalk.orange(`  - Empty: ${emptyKeys.length} keys`))
      }
    }
  }

  // Detailed report
  if (hasErrors) {
    console.log(chalk.blue.bold('\n📋 Detailed Report:\n'))

    // Missing keys
    for (const locale in stats.missing) {
      if (stats.missing[locale].length > 0) {
        console.log(chalk.red(`\n${locale} - Missing keys:`))
        stats.missing[locale].forEach(key => {
          console.log(`  - ${key}`)
        })
      }
    }

    // Extra keys
    for (const locale in stats.extra) {
      if (stats.extra[locale].length > 0) {
        console.log(chalk.yellow(`\n${locale} - Extra keys (not in ${BASE_LOCALE}):`))
        stats.extra[locale].forEach(key => {
          console.log(`  - ${key}`)
        })
      }
    }

    // Empty values
    for (const locale in stats.empty) {
      if (stats.empty[locale].length > 0) {
        console.log(chalk.orange(`\n${locale} - Empty values:`))
        stats.empty[locale].forEach(key => {
          console.log(`  - ${key}`)
        })
      }
    }

    console.log(chalk.red.bold('\n❌ Translation validation failed!\n'))
    process.exit(1)
  } else {
    console.log(chalk.green.bold('\n✅ All translations are in sync!\n'))
  }
}

// Run validation
compareTranslations()
