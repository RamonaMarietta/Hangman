import random

print("Bienvenue dans le monde du pendu ! Entrez votre nickname")
nickname = input()

choisir_des_mots = ["conscience", "patience", "passion", "sagesse", "amour"]
mot_de_passe = str(choisir_des_mots[random.randint(0,len(choisir_des_mots) -1)])

tableau = list()

for i in range(len(mot_de_passe)):
	tableau.append("_")

print("- - - - - - - - - - -") 
print(mot_de_passe) 
print("".join(tableau))  
print("- - - - - - - - - - -")

lives = 7
gagne = False

while lives > 0:
	print("")
	print(nickname,"il te reste",lives,"vie")
	print("Entrez votre lettre:")
	lettre = input()
	
	if lettre in mot_de_passe:
	
		for i in range(len(mot_de_passe)):
			if mot_de_passe[i] == lettre:
				tableau[i] = lettre 
			if "".join(map(str,tableau)) == mot_de_passe:
				print(" ".join(tableau))
				print(" ")
				print(nickname," Tu as gagne !")
				lives = 0
				gagne = True
				break
		print("".join(tableau))  
	else:
		lives -= 1
if not gagne:
	print("You lost !")