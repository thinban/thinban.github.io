#!/bin/bash

function process_directory() {
    local dir="$1"
    local text=$(basename "$dir")
    local items=()
    for file in "$dir"/*; do
        if [ -d "$file" ] && [[ "$text" != "node_modules" ]] && [[ "$text" != "public" ]]; then
            process_directory "$file"
        else
            if [ "${file##*.}"x = "md"x ]||[ "${file##*.}"x = "html"x ];then
                local filename=$(basename "$file")
                # local link="/./${filename%.*}"
                local link="${file#*.}"
                items+=("{ text: '${filename%.*}', link: '$link' }")
            fi
        fi
    done
    if [[ "$text" != "node_modules" ]] && [[ "$text" != "public" ]];then
        echo "{ text: '$text', collapsible: true, collapsed: true, items: [$(IFS=, ; echo "${items[*]}")] },"
    fi
}
echo '['
process_directory .
echo ']'
