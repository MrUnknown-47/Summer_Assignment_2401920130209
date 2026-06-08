from abc import ABC, abstractmethod

class LibraryUser(ABC):

    @abstractmethod
    def registerAccount(self):
        pass

    @abstractmethod
    def requestBook(self):
        pass

class KidUser(LibraryUser):

    def __init__(self):
        self.age = 0
        self.bookType = ""

    def setAge(self, age):
        self.age = age

    def setBookType(self, book):
        self.bookType = book

    def registerAccount(self):
        if self.age < 12:
            print("You have successfully registered under a Kids Account")
        else:
            print("Sorry, Age must be less than 12 to register as a kid")

    def requestBook(self):
        if self.bookType == "Kids":
            print("Book Issued successfully, please return the book within 10 days")
        else:
            print("Oops, you are allowed to take only kids books")

class AdultUser(LibraryUser):

    def __init__(self):
        self.age = 0
        self.bookType = ""

    def setAge(self, age):
        self.age = age

    def setBookType(self, book):
        self.bookType = book

    def registerAccount(self):
        if self.age > 12:
            print("You have successfully registered under a Adult Account")
        else:
            print("Sorry, Age must be greater than 12 to register as an adult")

    def requestBook(self):
        if self.bookType == "Fiction":
            print("Book Issued successfully, please return the book within 7 days")
        else:
            print("Oops, you are allowed to take only adult Fiction books")

if __name__ == "__main__":

    kidUsers = KidUser()
    kidUsers.setAge(10)
    kidUsers.setBookType("Kids")
    kidUsers.registerAccount()
    kidUsers.requestBook()

    kidUsers.setAge(14)
    kidUsers.setBookType("Fiction")
    kidUsers.registerAccount()
    kidUsers.requestBook()

    print()

    adultUser = AdultUser()
    adultUser.setAge(5)
    adultUser.setBookType("Kids")
    adultUser.registerAccount()
    adultUser.requestBook()

    adultUser.setAge(55)
    adultUser.setBookType("Fiction")
    adultUser.registerAccount()
    adultUser.requestBook()