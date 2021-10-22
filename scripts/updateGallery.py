import os
import glob

# read code file
f = open("../indexCode.html", "r")
flines = f.readlines()
f.close()

# number of images
image_directory = "../images/portfolio/"
jpgs = glob.glob1(image_directory, "*.jpg")
fourCount = len(jpgs) - (len(jpgs) % 4)
column_one = jpgs[0:int(fourCount/4)]
column_two = jpgs[int(fourCount/4):int((fourCount/4)*2)]
column_three = jpgs[int((fourCount/4)*2):int((fourCount/4)*3)]
column_four = jpgs[int((fourCount/4)*3):int(len(jpgs))]

#print(column_one, column_two, column_three, column_four)


# Insert Images
# split up by columns
# One
countOne = 1
for line in flines:
    if ("<!-- Column One Instert Start -->" in line):
        break
    countOne += 1
flines_pre_column_one = flines[0:countOne]

# Two
countTwo = 1
for line in flines:
    if ("<!-- Column Two Instert Start -->" in line):
        break
    countTwo += 1
flines_pre_column_two = flines[countOne:countTwo]

# Three
countThree = 1
for line in flines:
    if ("<!-- Column Three Instert Start -->" in line):
        break
    countThree += 1
flines_pre_column_three = flines[countTwo:countThree]

# Four
countFour = 1
for line in flines:
    if ("<!-- Column Four Instert Start -->" in line):
        break
    countFour += 1
flines_pre_column_four = flines[countThree:countFour]

flines_after_column_four = flines[countFour:int(len(flines))]

# Add Image Strings
# HTML Strings
imageTag_first = "<img onclick=\"openImageViewer(this.src)\" src=\"images/portfolio/"
imageTag_second = "\" class=\"gallery__image\">\n"

# Append
flinesA = flines_pre_column_one
for jpgName in column_one:
    flinesA.append(imageTag_first + jpgName + imageTag_second)

flinesA += flines_pre_column_two
for jpgName in column_two:
    flinesA.append(imageTag_first + jpgName + imageTag_second)

flinesA += flines_pre_column_three
for jpgName in column_three:
    flinesA.append(imageTag_first + jpgName + imageTag_second)

flinesA += flines_pre_column_four
for jpgName in column_four:
    flinesA.append(imageTag_first + jpgName + imageTag_second)
flinesA += flines_after_column_four

# Write to file
f = open("../index.html", "a")
f.truncate(0)
for line in flinesA:
    f.write(line)
f.close()
