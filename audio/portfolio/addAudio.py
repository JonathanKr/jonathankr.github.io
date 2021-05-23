import os

# HTML Strings
audioTag_first = "<audio id=\""
audioTag_second = "_audio\"><source src=\"../audio/portfolio/"
audioTag_third = "\" type=\"audio/mp3\"></audio>"

liButtonTag_first = "<li><button class=\"audioPlayButton\" id=\""
liButtonTag_second = "\" onclick=\"audioPlayer(this.innerHTML,id)\" type=\"button\">[Play Audio Track]</button> "
liButtonTag_third = "</li>"


f = open("../../subpages/portfolioCode.html", "r")
flines = f.readlines()
f.close()
flinesB = flines[:]
lineStart = 1
lineEnd = 0
for line in flines:
    if "<!-- Audio Insert Start -->" in line:
        break
    lineStart += 1
for line in flines:
    if "<!-- Audio Insert End -->" in line:
        break
    lineEnd += 1
del flinesB[lineStart:lineEnd]

# Insert
directory = "./"
id_count = 0
for filename in os.listdir(directory):
    if filename.endswith(".mp3"):
        audioTag = audioTag_first + \
            str(id_count) + audioTag_second + filename + audioTag_third
        liButtonTag = liButtonTag_first + str(id_count) + \
            liButtonTag_second + filename[:-4] + liButtonTag_third
        id_count += 1

        flinesB[lineStart:lineStart] = [audioTag + liButtonTag]
        lineStart += 1
    else:
        pass

print(flinesB)

f = open("../../subpages/portfolio.html", "a")
f.truncate(0)
for line in flinesB:
    f.write(line + "\n")
f.close()
