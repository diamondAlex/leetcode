# todo this is disgusting, if reviewed, please do better
import heapq

class Solution:
    def kSmallestPairs(self, nums1: list[int], nums2: list[int], k: int) -> list[list[int]]:
        totals = [(nums1[0] + nums2[0], [0,0])]
        pairs = []
        j = 1
        i = 0
        while k > 0:
            current_total = totals[0][0]
            if j < len(nums1):
                while nums1[j] + nums2[0] < current_total:
                    newEntry = (nums1[j] + nums2[0],[j,0])
                    heapq.heappush(totals, newEntry)
                    j = j + 1
                    if j == len(nums1):
                        break
            min = heapq.heappop(totals)
            if min[1][0] < len(nums1) and min[1][1] < len(nums2)-1:
                newEntry = (nums1[min[1][0]] + nums2[min[1][1] + 1],[min[1][0], min[1][1] + 1])
                heapq.heappush(totals, newEntry)
            elif min[1][1] == len(nums2)-1 and i < len(nums1)-1:
                i = i + 1
                if len(totals) == 0:
                    newEntry = (nums1[i] + nums2[0],[i,0])
                    heapq.heappush(totals,newEntry)

            pairs.append([nums1[min[1][0]],nums2[min[1][1]]])
            k = k - 1
            if len(totals) == 0:
                break

        return pairs

nums1 = [1,1,2]
nums2 = [1,2,3]
k = 10
sol = Solution()
ret = sol.kSmallestPairs(nums1,nums2,k)
print()
print(ret)
