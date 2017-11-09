module ComicRepresenter
  include Roar::JSON

  property :id
  property :title
  property :dates
  property :thumbnail
  property :issueNumber
  property :variantDescription
  property :isbn
  property :characters
  collection :images
  property :creators

end
