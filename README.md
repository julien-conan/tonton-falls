## Documentation

https://gohugo.io/getting-started/quick-start/

## Commandes usuelles

hugo server -D

hugo new content content/posts/mon-post.md
sed -i '' 's/draft: true/draft: false/' content/posts/mon-post.md
sed -i '' '/title = .*/a
featured_image = '''images/name.extension'''
omit_header_text = true
' content/posts/mon-post.md