from abc import ABC, abstractmethod

class LibraryUser(ABC):

    @abstractmethod
    def registerAccount(self):
        pass

    @abstractmethod
    def requestBook(self):
        pass


class KidUsers(LibraryUser):

    def __init__(self, age, bookType):
        self.age = age
        self.bookType = bookType

    def registerAccount(self):
        if self.age < 12:
            print("You have successfully registered under a Kids Account")
        else:
            print("Sorry, Age must be less than 12 to register as a kid")

    def requestBook(self):
        if self.bookType.lower() == "kids":
            print("Book Issued successfully, please return the book within 10 days")
        else:
            print("Oops, you are allowed to take only kids books")


class AdultUser(LibraryUser):

    def __init__(self, age, bookType):
        self.age = age
        self.bookType = bookType

    def registerAccount(self):
        if self.age > 12:
            print("You have successfully registered under an Adult Account")
        else:
            print("Sorry, Age must be greater than 12 to register as an adult")

    def requestBook(self):
        if self.bookType.lower() == "fiction":
            print("Book Issued successfully, please return the book within 7 days")
        else:
            print("Oops, you are allowed to take only adult Fiction books")


print("Test case #1:")

kid1 = KidUsers(10, "Kids")
kid1.registerAccount()
kid1.requestBook()

print()

kid2 = KidUsers(18, "Fiction")
kid2.registerAccount()
kid2.requestBook()

print("\nTest case #2:")

adult1 = AdultUser(5, "Kids")
adult1.registerAccount()
adult1.requestBook()

print()

adult2 = AdultUser(23, "Fiction")
adult2.registerAccount()
adult2.requestBook()