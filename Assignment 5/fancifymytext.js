function showAlert() {
    alert("Hello, world!");
  }
  
function setBigger() {
    const st = document.getElementById("userText");
    st.style.fontSize = "24pt";
  }
  
function setFancy() {
    alert("Style Changed");
    const st = document.getElementById("userText");
  
    if (document.getElementById("fancy").checked) {
      //FancyShmancy
      st.style.fontWeight      = "bold";
      st.style.color           = "blue";
      st.style.textDecoration  = "underline";
    } else {
      //BoringBetty
      st.style.fontWeight      = "normal";
      st.style.color           = "black";
      st.style.textDecoration  = "none";
    }
}
  
function addMoo() {
    const st = document.getElementById("userText");
    let text = st.value.toUpperCase();
  
    const sentences = text
        .split(".")
        .map(s => s.trim())
        .filter(s => s.length > 0);
  
    const mooSentences = sentences.map(s => {
        const words = s.split(" ");
        words[words.length - 1] += "-MOO";
        return words.join(" ") + ".";
    });
  
    st.value = mooSentences.join(" ");
}
  