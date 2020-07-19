export interface HeroModel {
  id?: number, // (int, optional): The unique ID of the character resource.,
  name?: string, // (string, optional): The name of the character.,
  description?: string, // (string, optional): A short bio or description of the character.,
  modified?: Date, // (Date, optional): The date the resource was most recently modified.,
  resourceURI?: string, // (string, optional): The canonical URL identifier for this resource.,
  urls?: Array<string>, // (Array[Url], optional): A set of public web site URLs for the resource.,
  thumbnail?: {
    path: string, extension: string
  }, // (Image, optional): The representative image for this character.,
  comics?: {
    available: number,
    collectionURI: string,
    items: Array<{ name: string, resourceURI: string }>,
    returned: number
  }, // (ComicList, optional): A resource list containing comics which feature this character.,
  stories?: Array<string>, // (StoryList, optional): A resource list of stories in which this character appears.,
  events?: Array<string>, // (EventList, optional): A resource list of events in which this character appears.,
  series?: Array<string>, // (SeriesList, optional): A resource list of series in which this character appears.
}
