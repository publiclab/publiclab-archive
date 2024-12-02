require 'fileutils'

tags = Tag.joins(:node_tag, :node)
          .select('MAX(node.nid), node.status, term_data.*, community_tags.*')
          .where('node.status = ?', 1)
          .group(:name)

tags.each do |tag|
  name = tag.name.sub('/','-')
  path = 'public/static/tag/' + name + ".md"
  nodes = tag.nodes
  text = ""
  nodes.each do |node|
    text += "[#{node.title}](#{node.path})"
  end
  File.open(path, 'w') do |file|
    file.write(text)
  end
end
