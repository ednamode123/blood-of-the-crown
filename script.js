// Password to allow uploads
const uploadPassword = "euh9fyh2";

// Function to upload a chapter
function uploadChapter() {
    const passwordInput = document.getElementById('upload-password');
    const fileInput = document.getElementById('chapter-upload');

    if (passwordInput.value !== uploadPassword) {
        alert("Incorrect password!");
        return;
    }

    if (fileInput.files.length === 0) {
        alert("Please upload a PDF file.");
        return;
    }

    const file = fileInput.files[0];
    const chapterTitle = file.name.replace('.pdf', '');
    const chapterPage = `${chapterTitle.replace(/\s+/g, '-')}.html`;

    // Create a new chapter page
    const newPageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${chapterTitle} - Blood of the Crown</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Blood of the Crown</h1>
        <a href="index.html" class="back-link">Back to Chapters List</a>
    </header>

    <main>
        <section id="chapter-content">
            <h2>${chapterTitle}</h2>
            <iframe src="${file.name}" width="100%" height="600px" type="application/pdf"></iframe>
        </section>

        <section class="comments-section">
            <h2>Comments</h2>
            <textarea id="comment-input" placeholder="Leave a comment..."></textarea>
            <button onclick="addComment()">Submit</button>
            <div id="comments-container"></div>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
    `;

    // Save the new chapter page (you'll need to do this manually as it's not possible to save files client-side)
    // For a real implementation, use a server-side script to save files

    // Update the chapter list (again, in a real implementation this would be dynamic)
    const chapterLinks = document.getElementById('chapter-links');
    const newListItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.href = chapterPage;
    newLink.innerText = chapterTitle;
    newListItem.appendChild(newLink);
    chapterLinks.appendChild(newListItem);

    alert("Chapter uploaded successfully (simulated)!");
}

// Function to add a comment
function addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentsContainer = document.getElementById('comments-container');

    if (commentInput.value.trim() === "") {
        alert("Please write a comment.");
        return;
    }

    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.innerText = commentInput.value;
    commentsContainer.appendChild(newComment);

    commentInput.value = '';
}