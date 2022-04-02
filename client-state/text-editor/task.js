const messageArea = document.getElementById("editor");
messageArea.addEventListener("input", () => localStorage.setItem("text", messageArea.value));
document.addEventListener("DOMContentLoaded", () => document.getElementById("editor").value = localStorage.getItem("text"));