class UpVote
  include ::UseCase

  def initialize(comic_id)
    @comic_id = comic_id
  end

  def perform
    create_or_increase
  end

  private

  attr_reader :comic_id

  def create_or_increase
    comic = ComicVote.upvote(comic_id: comic_id)
    comic.save
    comic.tap do |comic|
      errors.add(:base, 'Vote failed to save') if comic.new_record?
    end
  end
end
