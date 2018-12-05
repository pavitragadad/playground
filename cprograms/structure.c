#include <stdio.h>
#include<string.h>
struct car
{
    char name[50];
    int model;
    int manufacture_date;
    int price;
    int Discount;
    
};
struct car s[5];
int i;
int discount_amount=1;
int discount_percentage;
int  discounted_price=1;
void main()
{
    
    printf("Enter car details:\n");

    // storing information
    for(i=0; i<2;i++)
    {
       
        printf("Enter name: \n");
        scanf("%s",s[i].name);
        printf("Enter model: \n");
        scanf("%d",&s[i].model);
       printf("enter manufacture date: \n");
       scanf("%d",&s[i].manufacture_date);
      // getdate(&date);
        printf("Enter cost: \n");
        scanf("%d",&s[i].price);
    }
    greater();
    dcount();
}
void greater()
{
    for(i=0; i<2;i++)
    {
        if(s[i].model>=2010)
        {
            
            printf("the car name is :%s\n\n",s[i].name);
            printf("\n");
        }
    }
}
void dcount()
{
    for(i=0; i<2;i++)
    {
        if(s[i].price>=200000)
        {
          printf("price=%d",s[i].price);
          discount_amount = ((s[i].price*10)/100);
          discounted_price = (s[i].price-discount_amount);
          printf("\n\nDiscount amount : %d \n\n", discount_amount);
          printf("Discounted price : %d \n\n", discounted_price);
    
        }
    }
}
