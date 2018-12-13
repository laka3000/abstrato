require 'rubygems'
require 'sinatra'
require 'erb'
require 'csv'
require 'json'
require_relative 'term_creator'

get '/new_term' do
  TermCreator.new_term.to_json
end

get '/' do
  erb :index
end
