module "vpc" {
  source = "../../modules/vpc"

  vpc_name = "aakasha-prod-vpc"
  vpc_cidr = var.vpc_cidr

  availability_zones = var.availability_zones
  public_subnets     = var.public_subnets
  private_subnets    = var.private_subnets
}

module "eks" {
  source = "../../modules/eks"

  cluster_name    = "aakasha-prod"
  cluster_version = "1.33"

  vpc_id             = module.vpc.vpc_id
  private_subnet_ids = module.vpc.private_subnet_ids

  node_instance_types = ["t3.medium"]

  desired_nodes = 2
  min_nodes     = 1
  max_nodes     = 3
}

module "rds" {
  source = "../../modules/rds"

  environment = "prod"

  db_name     = var.db_name
  db_username = var.db_username
  db_password = var.db_password

  db_instance_class = var.db_instance_class

  vpc_id       = module.vpc.vpc_id
  db_subnet_ids = module.vpc.private_subnet_ids

  allowed_security_group_ids = [
    # We will put the EKS node/pod security group here
  ]
}
