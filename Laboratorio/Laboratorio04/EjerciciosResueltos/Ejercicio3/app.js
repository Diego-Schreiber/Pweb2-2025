const fs = require('fs')
const path = require('path')
const express = require('express')
const bp = require('body-parser')
const MarkdownIt = require('markdown-it'),
	md = new MarkdownIt();
const app = express()

app.use(express.static('pub'))
app.use(bp.json())
app.use(bp.urlencoded({
	extended: true
}))

app.listen(3000, () => {
	console.log("Escuchando en: http://localhost:3000")
})

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.post('/', (request, response) => {
	console.log(request.body)
	let markDownText = request.body.text
	console.log(markDownText)
	let htmlText = md.render(markDownText)
	response.setHeader('Content-Type', 'application/json')
	response.end(JSON.stringify({
		text: htmlText
	}))
})
Note que tanto el tanto GET como POST comparten el mismo URL

function recitar(markupText) {
	const url = 'http://localhost:3000/'
	const data = {
		text: markupText
	}
	console.log(data)
	const request = {
		method: 'POST', 
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}
	http = fetch(url, request)
	http.then(
		response => response.json()
	).then(
		data => {
			document.querySelector("#htmlCode").innerHTML = data.text
		}
	)
}
document.addEventListener('DOMContentLoaded', function () {
	const text = document.querySelector('#markupText')
	document.querySelector('#markupForm').onsubmit = () => {
		recitar(text.value)
		return false;
	}
})
