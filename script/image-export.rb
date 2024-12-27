require 'fileutils'

images = Image.all

images.each do |image|
  if image.photo_file_name
    path = "public/static/i/#{image.id}.md"
    text = "---\n"
    text += "id: #{image.id}\n"
    text += "path: #{image.path}\n"
    text += "created_at: #{image.created_at.to_s(:long)}\n"
    text += "---\n\n"
    text += "<script>window.location.replace('..#{ image.path }');</script>";
    File.open(path, 'w') do |file|
      file.write(text)
    end
  end
end
