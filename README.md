# Component Pattern

Author: Gavin Suntop 
gavin@gsuntop.com

A starter JS template for front end UI components. Contains a simple working example of event binding.

Dependencies: jQuery

## Bash Function

The following code can be added to your .bashrc to generate new components with the 'jsc' command.

```bash
function jsc() {
    echo -n "Component Name: "
    read componentName
    componentName=${componentName:-Component}

    echo -n "Namespace (window): "
    read namespace
    namespace=${namespace:-window}

    echo -n "Author: "
    read author

    # strip spaces from class name
    local componentNameNoSpace="$(echo $componentName | tr -d ' ')"

    # convert filename to all lowercase and prepend namespace if specified
    if [ "$namespace" != "window" ]; then
        local filename="$(echo $namespace.$componentNameNoSpace.js | tr '[:upper:]' '[:lower:]')"
    else
        local filename="$(echo $componentNameNoSpace.js | tr '[:upper:]' '[:lower:]')"
    fi

    curl https://raw.github.com/gvn/component-pattern/master/component.js > $filename

    # convert tokens within scaffold to specified values
    sed -i .bak "s/Component/$componentNameNoSpace/g" $filename
    sed -i .bak "s/window/$namespace/g" $filename
    sed -i .bak "s/#AUTHOR#/$author/g" $filename

    rm $filename.bak
}
```
