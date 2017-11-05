class ComicVote < ApplicationRecord
  def self.upvote(comic_id:)
    find_or_initialize_by(comic_id: comic_id).tap do |comic_vote|
      comic_vote.votes += 1
    end
  end
end
