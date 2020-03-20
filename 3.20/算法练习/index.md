#### 求出1-100以内的质数
<script>
　　/*1-100所有的质数*/
　　var i = 0;
　　var j = 0;

　　for(i = 1; i <= 100; i++)
　　{
　　var count = 0; //计数器，注意不能写到外面去

　　for(j = 1; j <= i; j++)
　　{
　　if(i % j == 0)
　　{
　　count++;
　　}
　　}

　　//只有两个约数的话,就说明是质数。
　　if(count == 2)
　　{
　　document.write(i+"&nbsp");
　　}
　　}
</script>