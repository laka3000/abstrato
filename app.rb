require 'rubygems'
require 'sinatra'
require 'erb'
require 'csv'
require 'json'
require_relative 'term_creator'

configure do
  set :protection, except: [:frame_options]
end

get '/new_term' do
  TermCreator.new_term.to_json
end

get '/' do
  erb :index
end
