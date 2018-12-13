class TermCreator
  class << self
    def new_term
      CSV.read("./data.csv")
        .sample[1]
        .gsub(/;/, ',')
        .capitalize
    end
  end
end
