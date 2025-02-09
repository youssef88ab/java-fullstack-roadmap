package Arrays;

// 1389. Create Target Array in the Given Order

class Solution
{
    public static void main(String[] args) {
        int[] nums = {1,2,3,4,0} ;
        int[] index = {0,1,2,3,0} ;
        int[] result = createTargetArray(nums,index);
        for (int i = 0 ; i < result.length ; i++)
        {
            System.out.print(result[i] + "|");
        }
    }

    public static int[] createTargetArray(int[] nums, int[] index)
    {
        int temp ;
        for (int j = 0 ; j < nums.length - 1 ; j++) {
            for (int i = 0; i < nums.length - j - 1; i++) {
                if (index[i] >= index[i + 1]) {
                    // Indexes Swap
                    temp = index[i];
                    index[i] = index[i + 1];
                    index[i + 1] = temp;

                    // Nums Swap
                    temp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = temp;
                }
            }
        }
        return nums ;
    }
}