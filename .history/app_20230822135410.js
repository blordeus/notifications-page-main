const unReadMessages=document.querySelectorAll(".unread");
const unread=document.getElementById("notifications");
const markAll=document.getElementById("mark_all");

unread.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        unread.innerText = newUnReadMessages.length;
    });
})
