require 'fileutils'

tags = Tag.joins(:node_tag, :node)
          .select('MAX(node.nid), node.status, term_data.*, community_tags.*')
          .where('node.status = ?', 1)
          .group(:name)

tags.each do |tag|
  name = tag.name.sub('/','-')
  name = name.sub(':','-')
  path = 'public/static/tag/' + name + ".md"
  text = "# #{name}\n\n"
  text += "#{tag.nodes.size} notes and wiki pages | [see all topics](/wiki/topics)\n\n"
  tag.nodes.where(status: 1).each do |node|
    text += "- [#{node.title}](#{node.path})"
    text +=  " by [#{node.author.username}](../profile/#{node.author.username})" if node.type == "note"
    text +=  " (wiki)" if node.type == "page"
    text += "\n"
  end
  File.open(path, 'w') do |file|
    file.write(text)
  end
end

