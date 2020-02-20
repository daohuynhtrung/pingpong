$(document).ready(function() {
    $("button").click(function() {
        $.get("http://localhost:3000/api/posts", function(data) {
            for (let p = 0; p < data.length; p++) {
                const element = data[p];
                var template = `
                    <h5>
                        ` + data[p].title + `
                        <div>
                        ` + data[p].content + `
                        </div>
                    </h5>
                `;
                $("h3").append(template);
            }
        })
    });
});