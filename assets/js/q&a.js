    import { pipeline } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.15.0";

    let model;


    async function loadModel() {
        try {
            model = await pipeline("question-answering", "Xenova/distilbert-base-cased-distilled-squad");
        } catch (err) {
            console.error("Error loading model:", err);
        }
    }
    loadModel();

    async function runQA() {
        const question = document.getElementById("questionInput").value.trim();
        if (!question) {
            document.getElementById("output").value = "Please enter a question.";
            return;
        }

        if (!model) {
            document.getElementById("output").value = "Model is still loading, please wait...";
            return;
        }

        document.getElementById("output").value = "Loading answer... (This may take a few seconds)";

        try {
            const contextElements = document.getElementsByClassName("post-body-container");
            const context = contextElements.length > 0 ? contextElements[0].innerText : "No context found.";

            const result = await model(question, context);
            document.getElementById("output").value = result.answer || "No answer found.";
        } catch (error) {
            console.error("Error:", error);
            document.getElementById("output").value = "Error loading model or answering question.";
        }
    }

    document.getElementById("askBtn").addEventListener("click", runQA);


    function showPopup() {
        document.getElementById("popupOverlay").style.display = "block";
        document.getElementById("questionPopup").style.display = "block";
    }

    function closePopup() {
        document.getElementById("popupOverlay").style.display = "none";
        document.getElementById("questionPopup").style.display = "none";
    }

    document.getElementById("closePopup").addEventListener("click", closePopup);


    document.getElementById("loginBtn").addEventListener("click", () => {
        closePopup();
        window.location.href = "https://www.salimwireless.com/2025/05/login.html";
    });

 
    setsetTimeout(showPopup, 10000);
