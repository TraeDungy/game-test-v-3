<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2113.65">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">let connections = [];</p>
<p class="p1">let challenges = [];</p>
<p class="p1">let score = 0;</p>
<p class="p2"><br></p>
<p class="p1">document.getElementById('start-game').addEventListener('click', startGame);</p>
<p class="p1">document.getElementById('upload-questions').addEventListener('change', loadQuestions);</p>
<p class="p1">document.getElementById('connections').addEventListener('click', () =&gt; displayQuestion('connections'));</p>
<p class="p1">document.getElementById('challenges').addEventListener('click', () =&gt; displayQuestion('challenges'));</p>
<p class="p1">document.getElementById('skip').addEventListener('click', skipQuestion);</p>
<p class="p2"><br></p>
<p class="p1">function startGame() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById('start-menu').style.display = 'none';</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById('game-screen').style.display = 'block';</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function loadQuestions(event) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const file = event.target.files[0];</p>
<p class="p1"><span class="Apple-converted-space">    </span>const reader = new FileReader();</p>
<p class="p1"><span class="Apple-converted-space">    </span>reader.onload = function(e) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>const text = e.target.result;</p>
<p class="p1"><span class="Apple-converted-space">        </span>parseCSV(text);</p>
<p class="p1"><span class="Apple-converted-space">    </span>};</p>
<p class="p1"><span class="Apple-converted-space">    </span>reader.readAsText(file);</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function parseCSV(text) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const lines = text.split('\n');</p>
<p class="p1"><span class="Apple-converted-space">    </span>lines.forEach(line =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>const [category, question] = line.split(',');</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (category === 'connections') {</p>
<p class="p1"><span class="Apple-converted-space">            </span>connections.push(question);</p>
<p class="p1"><span class="Apple-converted-space">        </span>} else if (category === 'challenges') {</p>
<p class="p1"><span class="Apple-converted-space">            </span>challenges.push(question);</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function displayQuestion(category) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>let question;</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (category === 'connections') {</p>
<p class="p1"><span class="Apple-converted-space">        </span>question = connections.pop();</p>
<p class="p1"><span class="Apple-converted-space">        </span>score += 3;</p>
<p class="p1"><span class="Apple-converted-space">    </span>} else if (category === 'challenges') {</p>
<p class="p1"><span class="Apple-converted-space">        </span>question = challenges.pop();</p>
<p class="p1"><span class="Apple-converted-space">        </span>score += 2;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>updateScore();</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById('question-display').textContent = question;</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function skipQuestion() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>score -= 1;</p>
<p class="p1"><span class="Apple-converted-space">    </span>updateScore();</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById('question-display').textContent = 'Question skipped!';</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function updateScore() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById('player-score').textContent = `Score: ${score}`;</p>
<p class="p1">}</p>
</body>
</html>
