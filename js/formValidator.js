$(".ui.form")
    .form({
        fields: {
            name: {
                identifier: "mashWater",
                rules: [
                    {
                        type: "regExp",
                        value: /^[1-9]\d*$/,
                        prompt: "{name} is set to {value} - please follow {ruleValue} format."
                    }
                ]
            },
        }
    })
    ;