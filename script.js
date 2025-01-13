* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(120deg, #1e1e2f, #14141f);
    color: #f5f5f5;
    overflow: hidden;
    transition: background 0.5s ease-in-out;
}

.container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

header {
    text-align: center;
    padding: 20px;
    background: linear-gradient(to right, #ff6b6b, #ffc3a0);
    color: #fff;
}

header h1 {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 2px;
}

header p {
    font-size: 1.2rem;
    opacity: 0.8;
}

.timeline-container {
    display: flex;
    align-items: center;
    height: 30%;
    padding: 20px;
}

.arrow {
    font-size: 2rem;
    padding: 15px;
    cursor: pointer;
    background: #333;
    color: #fff;
    border: none;
    border-radius: 50%;
    transition: transform 0.3s ease, background 0.3s ease;
}

.arrow:hover {
    background: #ff6b6b;
    transform: scale(1.2);
    color: #000;
}

.timeline {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    flex: 1;
    padding: 10px;
    border-bottom: 2px solid #ff6b6b;
}

.timeline-year {
    min-width: 100px;
    text-align: center;
    padding: 15px;
    background: #444;
    color: #f5f5f5;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1rem;
    transition: background 0.3s ease, transform 0.3s ease;
}

.timeline-year:hover {
    background: #ff6b6b;
    color: #000;
    transform: scale(1.1);
}

.timeline-year.selected {
    background: #ffcccb;
    transform: scale(1.3);
}

.year-details {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: linear-gradient(90deg, #333, #444);
    transition: opacity 0.3s ease, transform 0.3s ease;
    overflow: hidden;
}

.year-details.hidden {
    opacity: 0;
    transform: translateY(50px);
    pointer-events: none;
}

.year-content {
    max-width: 800px;
    animation: fadeIn 0.5s ease-in-out;
    padding: 20px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
}

.year-content h2 {
    font-size: 2rem;
    color: #ff6b6b;
    margin-bottom: 20px;
}

.year-content p {
    font-size: 1.2rem;
    line-height: 1.8;
}

.year-content img {
    max-width: 100%;
    border-radius: 10px;
    margin-top: 10px;
}

.sub-events h4 {
    margin: 10px 0 5px;
    font-size: 1.1rem;
    color: #333;
}

footer {
    text-align: center;
    padding: 10px;
    background: #111;
    color: #aaa;
    font-size: 0.9rem;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
