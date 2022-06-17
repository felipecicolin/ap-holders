# frozen_string_literal: true

module Blockfrost
  class BlockfrostConnection < ApplicationService
    def initialize
      super()
      @blockfrost = Blockfrostruby::CardanoMainNet.new(ENV.fetch("BLOCKFROST_API_KEY", nil))
    end

    def call
      get_connection_status
    end

    def get_connection_status
      @blockfrost.get_health
    end
  end
end
