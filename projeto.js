window.onload = function() {
    new Feedback({
        environment: "production",
        project_id: 53,
        author_id:  "93",
        author_name: "Ana Paula Melo",
        content_type: "biography",
        content_id:  "1728",
        content_url: "bertha_lutz",
        content_title: "Bertha Lutz",
        rating_option_radio: {
            options: [
                {
                    improvement_options: []
                },
                {
                    improvement_options: [
                        "Esta biografia contém informação incorreta",
                        "Esta biografia não tem a informação que procuro",
                        "Outro"
                    ]
                }
            ]
        },
        rating_title: {
            text: "Essa página foi útil?",
        },
    });
}