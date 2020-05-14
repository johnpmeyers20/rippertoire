class SongsController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]
  # GET /songs
  def index
    @songs = Song.all

    render json: @songs
  end

  # GET /songs/1
  def show
    @song = Song.find(params[:id])

    render json: @song
  end

  # POST /songs
  def create
    @song = Song.new(song_params)

    if @song.save
      render json: @song, status: :created
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # PUT /songs/1
  def update
    @song = Song.find(params[:id])
    @song.update(params)

    render json: @song
  end

  # DELETE /songs/1
  def destroy
    @song = Song.find(params[:id])

    @song.destroy
  end

  private

  #set song via params
  def set_song
    @song = Song.find(params[:id])
  end
  
  def song_params
    params.require(:song).permit(:title, :artist, :rep_cat, :lyrics)
  end
end
