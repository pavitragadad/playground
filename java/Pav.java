public class Pav {

    public static void main(String args[]) {
        int[] Array = new int[5];
        int newArray[4]={22,25,30,32,35};

        // Initializing elements of array seperately
        for (int n = 0; n < newArray.length; n++) {
            newArray[n] = n;
        }
        System.out.println(newArray[2]); // Assigning 2nd element of array value
    }
}