InertiaRails.configure do |config|
  config.version = ViteRails.manifest.vite_asset_path("application.js") rescue nil
end
