#include <iostream>
using namespace std;

struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
    ListNode *reverseLinkedList(ListNode *head)
    {
        if (head == NULL || head->next == NULL)
        {
            return head;
        }

        ListNode *newHead = reverseLinkedList(head->next);

        ListNode *front = head->next;

        front->next = head;

        head->next = NULL;

        return newHead;
    }

    bool isPalindrome(ListNode *head)
    {
        if (head == NULL || head->next == NULL)
        {
            return true;
        }

        ListNode *slow = head;
        ListNode *fast = head;

        while (fast->next != NULL && fast->next->next != NULL)
        {
            slow = slow->next;
            fast = fast->next->next;
        }

        ListNode *newHead = reverseLinkedList(slow->next);

        ListNode *first = head;

        ListNode *second = newHead;

        while (second != NULL)
        {
            if (first->val != second->val)
            {
                reverseLinkedList(newHead);
                return false;
            }

            first = first->next;
            second = second->next;
        }

        reverseLinkedList(newHead);

        return true;
    }
};

int main()
{
    Solution sol;
    ListNode *head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(2);
    head->next->next->next = new ListNode(1);

    if (sol.isPalindrome(head))
    {
        cout << "The linked list is a palindrome." << endl;
    }
    else
    {
        cout << "The linked list is not a palindrome." << endl;
    }

    return 0;
}