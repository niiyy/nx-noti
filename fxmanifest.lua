fx_version "cerulean"

description "FiveM noti."
author "niiyy"
version '1.0.0'

games {
  "gta5",
}

client_script {
  'dist/client/client.min.js'
}

ui_page 'dist/ui/index.html'

files {
  'dist/ui/index.html',
  'dist/ui/bundle.js',
  'dist/ui/main.css',
}