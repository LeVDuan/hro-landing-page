// This file contains the interface definitions for all team components
// to ensure consistency across the application

export interface TeamComponentProps {
  locale: string
}

export interface AboutUsProps extends TeamComponentProps {
  founders?: any[]
}

export interface MediaProps extends TeamComponentProps {
  mediaTeam?: any[]
}

export interface PitchersProps extends TeamComponentProps {
  pitchers?: any[]
}

export interface CatchersProps extends TeamComponentProps {
  catchers?: any[]
}

export interface InfieldersProps extends TeamComponentProps {
  infielders?: any[]
}

export interface OutfieldersProps extends TeamComponentProps {
  outfielders?: any[]
}

export interface FaqsProps extends TeamComponentProps {
  FaqsData?: any[]
}