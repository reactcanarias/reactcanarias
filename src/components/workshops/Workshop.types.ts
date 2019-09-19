export interface MeetUpEvent {
  created: number
  duration: number
  id: string
  name: string
  date_in_series_pattern: boolean
  status: string
  time: number
  local_date: string
  local_time: string
  updated: number
  utc_offset: number
  waitlist_count: number
  yes_rsvp_count: number
  venue: MeetUpVenue
  group: MeetUpGroup
  link: string
  description: string
  how_to_find_us: string
  visibility: string
  member_pay_fee: boolean
}

export interface MeetUpVenue {
  id: number
  name: string
  lat: number
  lon: number
  repinned: boolean
  address_1: string
  city: string
  country: string
  localized_country_name: string
}

export interface MeetUpGroup {
  created: number
  name: string
  id: number
  join_mode: string
  lat: number
  lon: number
  urlname: string
  who: string
  localized_location: string
  state: string
  country: string
  region: string
  timezone: string
}

export interface WorkshopProps {
  name: string
  year: string
  date: string
  startDate: string
}
