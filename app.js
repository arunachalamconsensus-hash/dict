function searchWord(){
    let word = document.getElementById("word").value;
    let show = document.getElementById("result");

    if(word === ""){
        show.innerText = "❌ Enter a word";
        return;
    }

    axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then(function(res){
        let data = res.data[0];

        let meaning = data.meanings[0].definitions[0].definition;
        let example = data.meanings[0].definitions[0].example || "No example available";

        show.innerHTML =
            "<b>Word:</b> " + word + "<br>" +
            "<b>Meaning:</b> " + meaning + "<br>" +
            "<b>Example:</b> " + example;
    })
    .catch(function(){
        show.innerText = "❌ Word not found!";
    });
}
