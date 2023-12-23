public class Valid{
    public static void main(String[] args){
        String s = "A man, a plan, a canal: Panama";
        System.out.println(findPal(s));
    }

    public static boolean findPal(String s){
        String input = s.replaceAll(" ","").toLowerCase();
        StringBuilder str = new StringBuilder();
        for(int i = 0;i<input.length();i++){
            int pos = (int) input.charAt(i);
            if(pos <= 122 && pos >= 97 || pos <=57 && pos >= 48){
                str.append(input.charAt(i));
            }
        }
        String formatted = str.toString();
        System.out.println(str.toString());
        for(int i = 0;i<formatted.length();i++){
            int j = formatted.length() - i - 1; 
            if(formatted.charAt(i) != formatted.charAt(j)){
                return false; 
            }
        }
        return true;
    }
}
