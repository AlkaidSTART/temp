#include <stdio.h>
#include <pthread.h>
#include <unistd.h>
#include <semaphore.h>
sem_t sem;
int i=20; //票数

void *test1(){

	while(1){
		sem_wait(&sem);
	// 信号量减1，表示有线程进入临界区
		if(i>0){
			printf("T1:%d\n",i);
			i--;
			sem_post(&sem);
			sleep(1);
		}
		else{
			sem_post(&sem);
			break;
		}
	}
}
void *test2(){
	while(1){
		sem_wait(&sem);
	// 信号量减1，表示有线程进入临界区
		if(i>0){
			printf("T2:%d\n",i);
			i--;
			sem_post(&sem);
			sleep(1);
		}
		else{
			sem_post(&sem);
			break;
		}
	}
}
int main(){
	pthread_t child1;
	pthread_t child2;


	sem_init(&sem,0,1);
// 信号量为0，表示没有线程可以访问临界区
// 初始化信号量为1，表示只有一个线程可以访问临界区


	pthread_create(&child1,NULL,test1,NULL);
	pthread_create(&child2,NULL,test2,NULL);
	
	pthread_join(child1,NULL);
	pthread_join(child2,NULL);
	return 0;
}
