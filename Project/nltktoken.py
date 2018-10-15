from bs4 import BeautifulSoup 
import urllib.request 
import nltk 
from nltk.corpus import stopwords 
import time

start_time=time.time()
#def search_tuple(tups, elem):
#	return filter(lambda tup: elem in tup, tups)

#response = urllib.request.urlopen('https://en.wikipedia.org/wiki/Coffee') 
response=open("/home/vsd/Desktop/Coffee - Wikipedia.html")
html = response.read() 
soup = BeautifulSoup(html,"html5lib") 
text = soup.get_text(strip=True)
#tokens = [t for t in text.split()] 
print(text[60000:65000])


#tokens=nltk.word_tokenize(text)
#clean_tokens = tokens[:500]
"""tokens1=nltk.pos_tag(tokens)
tokens2=[t for t in tokens1 if t[1]=="NN" or t[1]=="NNS" or t[1]=="NNP" or t[1]=="NNPS"]
print(tokens2)
print("--- %s seconds ---" % (time.time() - start_time))

#print(search_tuple(tokens1,"NN"))
print("\n\n\n")
sr = stopwords.words('english') 
for token in tokens:
    if token in stopwords.words('english'): 
        clean_tokens.remove(token) 
print(len(clean_tokens))
freq = nltk.FreqDist(clean_tokens) 
for key,val in freq.items(): 
    print (str(key) + ':' + str(val))

tuples = [(1, "hey"), (2, "hey"), (3, "no")]
print(search_tuple(tuples, "hey"))
 [(1, "hey"), (2, "hey")]"""