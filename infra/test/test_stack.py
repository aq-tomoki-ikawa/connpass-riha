from constructs import Construct
from aws_cdk import (
    Stack,
    aws_ec2 as ec2,
    aws_ecs as ecs,
    aws_ecs_patterns as ecs_patterns,
)

class TestStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        vpc = ec2.Vpc(self, "Vpc", max_azs=3)     # default is all AZs in region

        cluster = ecs.Cluster(self, "Cluster", vpc=vpc)

        ecs_patterns.ApplicationLoadBalancedFargateService(self, "FargateService",
            cluster=cluster,            # Required
            cpu=512,                    # Default is 256
            desired_count=6,            # Default is 1
            task_image_options=ecs_patterns.ApplicationLoadBalancedTaskImageOptions(
                image=ecs.ContainerImage.from_registry("nginx")),
            memory_limit_mib=2048,      # Default is 512
            public_load_balancer=True)  # Default is True
