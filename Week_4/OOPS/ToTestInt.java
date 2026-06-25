
interface Test {

    public int square(int a);
}

class arithmetic implements Test {

    public int square(int b) {
        int s = b * b;
        System.out.println("\nInside arithmetic class – implemented method square");
        System.out.println("Square of " + b + " is " + s + "\n");
        return s;
    }

    void armeth() {
        System.out.println("Inside method of class Arithmetic");
    }
}

class ToTestInt {

    public static void main(String a[]) {
        System.out.println("calling from ToTestInt class maiin method\n");
        Test t = new arithmetic();
        System.out.println("Object of test interface is created through Arithmetic class ");
        System.out.println("Hence Arithmetic class method square is called");
        System.out.println("This object cannot call armeth method of Arithmetic class");
        t.square(10);
    }
}
