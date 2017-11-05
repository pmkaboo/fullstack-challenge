require 'rails_helper'

RSpec.describe FetchComics do

  context 'when a vote is given' do
    before do
      ComicVote.create(comic_id: 123)
    end

    it 'increases votes amount if ComicVote exists for the comic_id' do
      UpVote.perform(123)

      comic_votes = ComicVote.find_by(comic_id: 123)

      expect(comic_votes.votes).not_to be_nil
    end

    it 'saves ComicVote' do
      votes_before = ComicVote.find_by(comic_id: 123).votes
      UpVote.perform(123)
      votes_after = ComicVote.find_by(comic_id: 123).reload.votes

      expect(votes_before).to eq(votes_after - 1)
    end
  end
end
