#!/bin/bash

function jsc() {
    echo -n "Component Name: "
    read componentName
    componentName=${componentName:-Component}

    echo -n "Namespace (window): "
    read namespace
    namespace=${namespace:-window}

    echo -n "Author: "
    read author

    # strip spaces from component name
    local componentNameNoSpace="$(echo $componentName | tr -d ' ')"

    # convert filename to all lowercase and prepend namespace if specified
    if [ "$namespace" != "window" ]; then
        local filename="$(echo $namespace.$componentNameNoSpace.js | tr '[:upper:]' '[:lower:]')"
    else
        local filename="$(echo $componentNameNoSpace.js | tr '[:upper:]' '[:lower:]')"
    fi

    curl https://raw.github.com/gvn/component-pattern/fire/template.js > $filename

    # convert tokens within scaffold to specified values
    sed -i .bak "s/%COMPONENT_NAME%/$componentNameNoSpace/g" $filename
    sed -i .bak "s/%NAMESPACE%/$namespace/g" $filename
    sed -i .bak "s/%AUTHOR%/$author/g" $filename

    rm $filename.bak
}

jsc
