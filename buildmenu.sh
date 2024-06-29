find . -type f -name "*.md" ! -path "*/node_modules/*"   | while read -r file; do
      filename=$(basename "$file");       directory=$(dirname "$file")
      directory="${directory#./}"
      link="/${directory}/${filename%.md}"
      printf "{ text: '%s', link: '%s' },\n" "${filename}" "${link}";     done

