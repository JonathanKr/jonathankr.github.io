import os
import time

# Insert Audio
# HTML Strings
audioTag_first = "<audio id=\""
audioTag_second = "_audio\"><source src=\"../audio/portfolio/"
audioTag_third = "\" type=\"audio/mp3\"></audio>"

liButtonTag_first = "<li><button class=\"audioPlayButton\" id=\""
liButtonTag_second = "\" onclick=\"audioPlayer(this.innerHTML,id)\" type=\"button\">[Play Audio Track]</button> "
liButtonTag_third = "</li>"

# open Portfolio-Code
f = open("../subpages/portfolioCode.html", "r")
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

# Insertion
audio_directory = "../audio/portfolio/"
id_count = 0
for filename in os.listdir(audio_directory):
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


# Insert Image_Links
# HTML Strings
imageLinkTag_first = "<li><a onclick=\"openImageViewer(this.id, 'L')\" class=\"postLink\" id=\"../images/portfolio/"
imageLink_second = "\" style=\"cursor:pointer;\"><span class=\"liDate\">["
imageLink_third = "]</span>&nbsp;"
imageLink_fourth = "</a></li>"

# open Portfolio-Code
flinesC = flinesB[:]
lineStart = 1
lineEnd = 0
for line in flines:
    if "<!-- Image_Link Insert Start -->" in line:
        break
    lineStart += 1
for line in flines:
    if "<!-- Image_Link Insert End -->" in line:
        break
    lineEnd += 1
del flinesC[lineStart:lineEnd]

# Insertion
image_directory = "../images/portfolio/"
for filename in os.listdir(image_directory):
    if filename.endswith(".jpg"):
        imageLinkTag = imageLinkTag_first + filename + imageLink_second + \
            str(time.ctime(os.path.getmtime(image_directory + filename))) + \
            imageLink_third + filename[:-4] + imageLink_fourth

        flinesC[lineStart:lineStart] = [imageLinkTag]
        lineStart += 1
    else:
        pass


# Insert Images
# HTML Strings
imageTag_first = "<li><img onclick=\"openImageViewer(this.src, 'G')\" class=\"portImage\" src=\"../images/portfolio/"
imageTag_second = "\" width=\"150px\" height=\"150px\"></li>"

flinesD = flinesC[:]
lineStart = 1
lineEnd = 0
for line in flines:
    if "<!-- Image Insert Start -->" in line:
        break
    lineStart += 1
for line in flines:
    if "<!-- Image Insert End -->" in line:
        break
    lineEnd += 1
del flinesD[lineStart:lineEnd]

# Insertion
for filename in os.listdir(image_directory):
    if filename.endswith(".jpg"):
        imageTag = imageTag_first + filename + imageTag_second

        flinesD[lineStart:lineStart] = [imageTag]
        lineStart += 1
    else:
        pass


f = open("../subpages/portfolio.html", "a")
f.truncate(0)
for line in flinesD:
    f.write(line + "\n")
f.close()
